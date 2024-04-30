<div>
  <Drawer style="width:auto;" class="nav">
    <Content>
      <List>
        {#each options as option, i}
          {#if option.elements}
            <Accordion>
              <Panel variant="unelevated">
                <Header>
                  <div style="display:flex;">
                    <Icon class="material-icons" style="margin-right: 32px;"
                      >{option.icon}</Icon
                    >
                    <SecondaryText><big>{option.title}</big></SecondaryText>
                  </div>
                </Header>
                <AccordionContent>
                  <List>
                    {#each option.elements as item, j}
                      <Item href="{item.href}" class="nav-list-item">
                        <SecondaryText>{item.title}</SecondaryText>
                      </Item>
                    {/each}
                  </List>
                </AccordionContent>
              </Panel>
            </Accordion>
          {:else}
            <Item
              href="{option.href}"
              class="nav-list-item"
              style="height: 90px; max-width:240px;"
              on:click="{() => (selectionIndex = i)}"
              selected="{selectionIndex === i}"
            >
              <Graphic class="material-icons">{option.icon}</Graphic>
              <SecondaryText><big>{option.title}</big></SecondaryText>
            </Item>
          {/if}
        {/each}
      </List>
    </Content>
  </Drawer>
</div>

<script>
  import Drawer, { Content } from '@smui/drawer'
  import List, { Item, SecondaryText, Graphic } from '@smui/list'
  import Accordion, {
    Panel,
    Header,
    Content as AccordionContent,
  } from '@smui-extra/accordion'
  import { Icon } from '@smui/common'

  let selectionIndex = 1

  const options = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      href: '/',
    },
    {
      title: 'Search',
      icon: 'search',
      elements: [
        { title: 'Search Leads', href: '/lead-search' },
        { title: 'All Campaigns', href: '/all-campaigns' },
      ],
    },
    {
      title: 'Marketing',
      icon: 'trending_up',
      href: '/marketing',
    },
    {
      title: 'Users',
      icon: 'people',
      href: '/users',
    },
    {
      title: 'My Account',
      icon: 'person',
      href: '/account-overview',
    },
    {
      title: 'Transactions',
      icon: 'paid',
      href: '/transactions',
    },
  ]
</script>

<style>
  :root {
    --md-filled-button-container-shape: 10px;
  }
</style>
