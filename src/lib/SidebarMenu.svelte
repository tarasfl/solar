<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      {#each sidebarItems as item}
        {#if item.dropdownItems}
          <SidebarDropdownWrapper label="{item.label}" {spanClass}>
            <svelte:fragment slot="icon">
              <Icon {...icon_config} icon="{item.icon}" />
            </svelte:fragment>
            {#each item.dropdownItems as dropdownItem}
              <SidebarDropdownItem
                label="{dropdownItem.label}"
                href="{dropdownItem.href}"
                aClass='flex items-center p-2 ps-11 w-full text-base font-normal text-gray-100 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                style='color: black;'
             />
            {/each}
          </SidebarDropdownWrapper>
        {:else}
          <SidebarItem label="{item.label}" href="{item.href}" {spanClass}>
            <svelte:fragment slot="icon">
              <Icon {...icon_config} icon="{item.icon}"/>
            </svelte:fragment>
          </SidebarItem>
        {/if}
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>

<script>
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownItem,
    SidebarDropdownWrapper,
  } from 'flowbite-svelte'
  import {
    MagnifyingGlass,
    ChartBar,
    ArrowTrendingUp,
    Users,
    User,
    CurrencyDollar,
  } from 'svelte-heros-v2'
  import { Icon } from 'svelte-heros-v2'

  let spanClass = 'pl-4 pr-4 self-center text-lg text-gray-900 whitespace-nowrap dark:text-white p-5';

  let sidebarItems = [
    {
      label: 'Dashboard',
      href: '/',
      icon: ChartBar,
    },
    {
      label: 'Search',
      icon: MagnifyingGlass,
      dropdownItems: [
        { label: 'Search Leads', href: '/lead-search' },
        { label: 'All Campaigns', href: '/all-campaigns' },
      ],
    },
    {
      label: 'Marketing',
      icon: ArrowTrendingUp,
      href: '/marketing',
    },
    {
      label: 'Users',
      icon: Users,
      href: '/users',
    },
    {
      label: 'My Account',
      icon: User,
      href: '/account-overview',
    },
    {
      label: 'Transactions',
      icon: CurrencyDollar,
      href: '/transactions',
    },
  ]
  const icon_config = {
    size: 30,
    color: 'black',
  }
</script>
