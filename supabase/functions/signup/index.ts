import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { 
      orgName,
      orgType,
      firstName,
      lastName,
      email,
      phone,
      password,
      address,
      country,
      timezone
    } = await req.json();

    // Validate all required fields
    if (!orgName || !firstName || !lastName || !email || !password) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Create organization
    const { data: org, error: orgError } = await supabaseClient
      .from('organizations')
      .insert({
        name: orgName,
        type: orgType,
        address,
        country,
        timezone
      })
      .select()
      .single();

    if (orgError) throw orgError;

    // Create admin user
    const { data: auth, error: authError } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone,
          organization_id: org.id
        }
      }
    });

    if (authError) throw authError;

    // Assign admin role
    const { error: roleError } = await supabaseClient
      .from('user_roles')
      .insert({
        user_id: auth.user.id,
        role_id: await getAdminRoleId(org.id)
      });

    if (roleError) throw roleError;

    return new Response(
      JSON.stringify({ organization: org, user: auth.user }),
      { 
        status: 201,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

// Note: The getAdminRoleId function is not defined in the provided code, 
// you need to define it or import it from another module.
async function getAdminRoleId(orgId) {
  // implement the logic to get the admin role id
}
