<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Ripple from '@smui/ripple';
  import Paper, { Content } from '@smui/paper';
  import { Icon } from '@smui/common';
  import IconButton from '@smui/icon-button';
  import '@material/web/divider/divider'

  export let campaigns = [
  {
    name: 'Campaign name',
    date: 'Created on 21 of Feb 2024',
    type: 'Email reach',
    status: 'paused'
  },
  {
    name: 'Campaign name',
    date: 'Created on 23 of Feb 2024',
    type: 'Email reach',
    status: 'closed'
  },
  {
    name: 'Campaign name',
    date: 'Created on 21 of Jan 2024',
    type: 'Email reach',
    status: 'closed'
  },
  {
    name: 'Campaign name',
    date: 'Created on 25 of Feb 2024',
    type: 'LinkedIn Outreach',
    status: 'closed'
  },
  {
    name: 'Campaign name',
    date: 'Created on 21 of Jan 2024',
    type: 'LinkedIn Outreach',
    status: 'closed'
  }
]

  let active = 'All Campaigns';
</script>

<h3 class="page-title">Marketing</h3>
<div>
 
  <Paper color='secondary'style=" min-height:500px">
    <TabBar tabs={['All Campaigns', 'LinkedIn Outreach', 'Email Marketing']} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  
  
    {#if active === 'All Campaigns'}

    {#each campaigns as campaign }
          
   <Paper style='margin-bottom:5px'>
    <div class = 'campaign'> 
      <div class = 'campaign-title'>
        <strong>{campaign.name}</strong><br/>
        <p>{campaign.date}</p></div>
      <div class = 'campaign-type'>
        <Icon class="material-icons">mail_outline</Icon>
        <p>{campaign.type}</p>
      </div>
      <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button" class='campaign-status'>{campaign.status}</div>
      <div class='icons'>
        <IconButton class="material-icons" style='color:#2196F3'>
          remove_red_eye
        </IconButton>
        <IconButton class="material-icons">
          edit
        </IconButton>
        <IconButton class="material-icons" style='color:#F44336'>
          delete
        </IconButton>
      </div>
    </div>
    
  </Paper>
    {/each}

    {:else if active === 'LinkedIn Outreach'}
      {#each campaigns as campaign }
        {#if campaign.type == 'LinkedIn Outreach'}
      
   <Paper style='margin-bottom:5px'>
      <div class = 'campaign'> 
        <div class = 'campaign-title'>
          <strong>{campaign.name}</strong><br/>
          <p>{campaign.date}</p></div>
        <div class = 'campaign-type'>
          <Icon class="material-icons">mail_outline</Icon>
          <p>{campaign.type}</p>
        </div>
        <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button" class='campaign-status'>{campaign.status}</div>
        <div class='icons'>
          <IconButton class="material-icons" style='color:#2196F3'>
            remove_red_eye
          </IconButton>
          <IconButton class="material-icons">
            edit
          </IconButton>
          <IconButton class="material-icons" style='color:#F44336'>
            delete
          </IconButton>
        </div>
      </div>
      
    </Paper>
      {/if}
    {/each}

    {:else if active === 'Email Marketing'}
    {#each campaigns as campaign }
      {#if campaign.type =='Email reach'}
            
   <Paper style='margin-bottom:5px'>
    <div class = 'campaign'> 
      <div class = 'campaign-title'>
        <strong>{campaign.name}</strong><br/>
        <p>{campaign.date}</p></div>
      <div class = 'campaign-type'>
        <Icon class="material-icons">mail_outline</Icon>
        <p>{campaign.type}</p>
      </div>
      <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button" class='campaign-status'>{campaign.status}</div>
      <div class='icons'>
        <IconButton class="material-icons" style='color:#2196F3'>
          remove_red_eye
        </IconButton>
        <IconButton class="material-icons">
          edit
        </IconButton>
        <IconButton class="material-icons" style='color:#F44336'>
          delete
        </IconButton>
      </div>
    </div>
    
  </Paper>
      {/if}
      
    {/each}

    {/if}
  </Paper>
  </div>

  <style>
    div {
      color: rgba(114, 114, 114, 0.9);
    }

    .campaign-title {
      width: 30%;
    }
    .campaign-type {
      display: flex;
      justify-content: left;
      width: 20%;
    }
    .campaign-status {
      width: 30%;
      text-align:start;
    }
    .icons {
      width: 20%;
    }
    .campaign{
      width: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  </style>