<script>
    import '@material/web/tabs/secondary-tab'
    import '@material/web/list/list-item'
    import '@material/web/divider/divider'
    import Header from '$lib/Header.svelte';
    import SidebarMenu from '../lib/SidebarMenu.svelte';
</script>

<html lang="en">
<body>
<Header />



    <div class="content">
        <SidebarMenu/>
        <main class="main-content">
            <slot></slot>
        </main>
      </div>
</body>
</html>
    <style>
        main{
            margin: 20px;
        }
        html,
        * {
            margin: 0;
            padding: 0;
        }

        .content{
            display: flex;
            justify-content: space-between;
        }

        .main-content {
            margin-right: 50px;
        }

    </style>