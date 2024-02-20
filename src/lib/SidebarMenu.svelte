<script lang="ts">
  import '@material/web/list/list-item'
  import '@material/web/list/list'
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
</script>
<Drawer style = "height:680px;">
  <Content>
    <List>
      <Item href="/">
        <Text>Dashboard</Text>
      </Item>
      <Item href="/lead-search">
        <Text>Lead Generation</Text>
      </Item>
      <Item href="/marketing">
        <Text>Marketing</Text>
      </Item>
      <Item href="/users">
        <Text>Users</Text>
      </Item>
      <Item href = '/account-overview'>
        <Text>Account Overview</Text>
      </Item>
      <Item href = '/transactions'>
        <Text>Transactions</Text>
      </Item>

    </List>
  </Content>
</Drawer>

    <!-- <Drawer>
      <Content>
        <md-list style="max-width: 220px">
            <md-list-item class = 'list-item'><md-filled-button href = '/'>dashboard</md-filled-button> </md-list-item>
            <md-list-item class = 'list-item'><md-filled-button href = '/lead-search'>Lead generation</md-filled-button></md-list-item>
            <md-list-item class = 'list-item'><md-filled-button href = '/marketing'>Marketing</md-filled-button></md-list-item>
            <md-list-item class = 'list-item'><md-filled-button href = '/users'>Users</md-filled-button></md-list-item>
            <md-list-item class = 'list-item'><md-filled-button href = '/account-overview'>Account overview</md-filled-button></md-list-item>
            <md-list-item class = 'list-item'><md-filled-button href = '/transactions'>Transactions</md-filled-button></md-list-item>
        </md-list>
      </Content>
    </Drawer> -->

<style>

:root {
  --md-filled-button-container-shape: 10px;
  --md-filled-button-label-text-font: system-ui;
}
</style>