<script lang="ts">
  import '@material/web/list/list-item'
  import '@material/web/list/list'
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';
  import { Icon } from '@smui/common';
</script>
<Drawer style='min-height:680px; width:auto;'>
  <Content>
    <List>
      <Item href="/">
        <Icon class="material-icons">dashboard</Icon>
        <Text>Dashboard</Text>
      </Item>
      <Item href="/lead-search">
        <Icon class="material-icons">search</Icon>
        <Text>Lead Generation</Text>
      </Item>
      <Item href="/marketing">
        <Icon class="material-icons">trending_up</Icon>
        <Text>Marketing</Text>
      </Item>
      <Item href="/users">
        <Icon class="material-icons">people</Icon>
        <Text>Users</Text>
      </Item>
      <Item href = '/account-overview'>
        <Icon class="material-icons">person</Icon>
        <Text>Account Overview</Text>
      </Item>
      <Item href = '/transactions'>
        <Icon class="material-icons">paid</Icon>
        <Text>Transactions</Text>
      </Item>

    </List>
  </Content>
</Drawer>
<style>
  @media screen and (min-width: 1024px) {
}

:root {
  --md-filled-button-container-shape: 10px;
  --md-filled-button-label-text-font: system-ui;
}
</style>