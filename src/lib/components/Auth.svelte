<script>
    import supabase from "$lib/supabase";

    let loading = false;
    let email;

    const handleLogin = async () => {
        try {
        console.log(email);
        const {error} = await supabase.auth.signIn({email});

        if(error) throw error;
        alert('Check your email for login link')
    } catch(error) {
        console.error(error)
    }
    }
</script>

<p>Log in</p>

<form on:submit|preventDefault={handleLogin}>

</form>