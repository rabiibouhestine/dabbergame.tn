
export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', id)

    return {
        profile: data[0]
    };
}
