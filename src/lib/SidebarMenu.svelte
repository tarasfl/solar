<script lang="ts">
  import '@material/web/list/list-item'
  import '@material/web/list/list'
  import Drawer, {Content } from '@smui/drawer';
  import List, { Item, SecondaryText, Graphic} from '@smui/list';
  import Accordion, { Panel, Header, Content as AccordionContent } from '@smui-extra/accordion';



  // options for navigation drawer
  export let selectionIndex =1;
  export let options = [
    {
      subMenu:0,
      title:'Dashboard',
      icon:'dashboard',
      href:['/']
    },
    {
      subMenu: 1,
      title:'Lead Generation',
      elements: ['Lead Generation', 'All Campaigns'],
      icon:'search',
      href:['/lead-search', '/all-campaigns']
    }, 
    {
      subMenu: 0,
      title:'Marketing',
      icon:'trending_up',
      href:['/marketing']
    },
    {
      subMenu: 0,
      title:'Users',
      icon:'people',
      href:['/users']
    },
    {
      subMenu:0,
      title:'Account Overview',
      icon:'person',
      href:['/account-overview']
    },
    {
      subMenu:0,
      title:'Transactions',
      icon:'paid',
      href:['/transactions']
    }
  ]
</script>
<div>
<Drawer style='width:auto;' class='nav'>
  <Content>
    <List >
      {#each options as option, i}
      {#if option.subMenu}
        <Accordion>
          <Panel  variant="unelevated">
            <Header>
              <Graphic class="material-icons" >{option.icon}</Graphic>
              <SecondaryText><big>{option.title}</big></SecondaryText>
            </Header>
            <AccordionContent>
              <List>
              {#each option.elements as txt, i}
                  <Item href={option.href[i]}><SecondaryText>{txt}</SecondaryText></Item>   
              {/each}
            </List>
            </AccordionContent>
          </Panel>
        </Accordion>

     
      {:else}
        <Item href={option.href[0]} class='nav-list-item' style = 'height: 90px; max-width:240px;'
        on:SMUI:action={() => (selectionIndex = i)} selected={selectionIndex === i}>
          <Graphic class="material-icons" >{option.icon}</Graphic>
          <SecondaryText><big>{option.title}</big></SecondaryText>
        </Item>
        {/if}
      {/each}
    </List>
  </Content>
</Drawer>

</div>
<style>

:root {
  --md-filled-button-container-shape: 10px;
}
</style>