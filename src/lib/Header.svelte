<!-- Component for layout header -->
<script lang='ts'>
    import '@material/web/divider/divider'
</script>

<header>
    <div>
        <img alt = 'logo' src = './logo.png' class="logo">
    </div>
</header>
<md-divider></md-divider>

<style>

    header {
        background-color: #ffffff;
        height: 65px;
    }

    .logo {
        margin-left: 5px;
        margin-top: 5px;
        height: 55px;
    }
    div{
        display: flex;
    justify-content: space-between;
    }
* {
    margin: 0;
    padding: 0;
}

</style>