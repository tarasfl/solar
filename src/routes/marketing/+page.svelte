<script lang="ts">
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';
  import Ripple from '@smui/ripple';
  import Paper, { Content } from '@smui/paper';
  import { Icon } from '@smui/common';
  import IconButton from '@smui/icon-button';

  let active = 'Home';
</script>

<div>
    <TabBar tabs={['All Campaigns', 'LinkedIn Outreach', 'Email Marketing']} let:tab bind:active>
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
  
    {#if active === 'All Campaigns'}
      <Paper variant="unelevated">
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
      </Paper>
    {:else if active === 'LinkedIn Outreach'}
      <Paper variant="unelevated">
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
      </Paper>
    {:else if active === 'Email Marketing'}
      <Paper variant="unelevated">
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
        <div use:Ripple={{ surface: true }} tabindex="0" role="button" class = 'campaign'>
          <div>
            <strong>Campaign name</strong><br/>
            <p>Date of campaign</p></div>
          <div>
            <Icon class="material-icons">mail_outline</Icon>
            <p>Email reach</p>
          </div>
          <div use:Ripple={{ surface: true, color:'primary' }} tabindex="0" role="button">paused</div>
          <div>
            <IconButton class="material-icons">
              remove_red_eye
            </IconButton>
            <IconButton class="material-icons">
              edit
            </IconButton>
            <IconButton class="material-icons">
              delete
            </IconButton>
          </div>
        </div>
      </Paper>
    {/if}
  </div>

  <style>
    .campaign{
      width: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  </style>