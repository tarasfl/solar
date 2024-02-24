<script lang="ts">
  import '@material/web/list/list-item'
  import '@material/web/list/list'
  import Drawer, {Content } from '@smui/drawer';
  import List, { Item, Text, PrimaryText, SecondaryText, Graphic} from '@smui/list';
  import { Icon } from '@smui/common';

  // options for navigation drawer
  export let selectionIndex =1;
  export let options = [
    {
      text:'Dashboard',
      icon:'dashboard',
      href:'/'
    },
    {
      text:'Lead Generation',
      icon:'search',
      href:'/lead-search'
    }, 
    {
      text:'Marketing',
      icon:'trending_up',
      href:'/marketing'
    },
    {
      text:'Users',
      icon:'people',
      href:'/users'
    },
    {
      text:'Account Overview',
      icon:'person',
      href:'/account-overview'
    },
    {
      text:'Transactions',
      icon:'paid',
      href:'/transactions'
    }
  ]
</script>
<Drawer style='width:auto;'>
  <Content>
    <List twoLine singleSelection >
      {#each options as option, i}
        <Item href={option.href} style = 'height:90px'
        on:SMUI:action={() => (selectionIndex = i)} selected={selectionIndex === i}>
          <PrimaryText><Icon class="material-icons">{option.icon}</Icon></PrimaryText>
          <SecondaryText>{option.text}</SecondaryText>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>
<style>
:root {
  --md-filled-button-container-shape: 10px;
  --md-filled-button-label-text-font: system-ui;
}
</style>