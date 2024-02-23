<script lang="ts">
  import '@material/web/list/list-item'
  import '@material/web/list/list'
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text, PrimaryText, SecondaryText, Graphic} from '@smui/list';
  import { Icon } from '@smui/common';

  // options for navigation drawer
  export let selectionIndex: number;
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
<Drawer style='min-height:680px; width:auto;'>
  <Content>
    <List style='min-height:680px; flex:1;' twoLine singleSelection >
      {#each options as option, i}
        <Item href={option.href} class='item' 
        on:SMUI:action={() => (selectionIndex = i)} selected={selectionIndex === i}>
          <PrimaryText><Graphic class="material-icons">{option.icon}</Graphic></PrimaryText>
          <SecondaryText>{option.text}</SecondaryText>
        </Item>
      {/each}
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