<script>
        import '@material/web/list/list-item'
    import '@material/web/divider/divider'
</script>

<aside class="sidebar">
    <div>
    <md-list style="max-width: 160px">
        <a href = '/'><md-list-item class = 'list-item'> dashboard</md-list-item></a>
        <a href = '/lead-search'><md-list-item class = 'list-item'>Lead generation</md-list-item></a>
        <a href = '/marketing'><md-list-item class = 'list-item'>Marketing</md-list-item></a>
        <a href = '/users'><md-list-item class = 'list-item'>Users</md-list-item></a>
        <a href = '/account-overview'><md-list-item class = 'list-item'>Account overview</md-list-item></a>
        <a href = '/transactions'><md-list-item class = 'list-item'>Transactions</md-list-item></a>
    </md-list>
    </div>
</aside>

<style>
    aside{
        background-color: #ebebeb;
        height: 100%;
        width: 220px;
        display: flex;
        justify-content: center;
    }
    div{
        margin-top: 40px;
        margin-bottom: 40px;
        width: 180px;
    }
     .list-item:hover{
            background-color: white;
        }
        .list-item{
            border-radius: 5%;
            margin-bottom: 5px;
            background-color: #ebebeb;
        }
        a {
            text-decoration: none;
        }

        .sidebar {
            left: 0;
        }
</style>