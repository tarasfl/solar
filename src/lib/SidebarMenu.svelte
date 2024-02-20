<script lang="ts">
          import Drawer, { AppContent, Content } from '@smui/drawer';
</script>
    <Drawer>
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
    </Drawer>

<style>
    md-filled-button {
        width: 180px;
    }

:root {
  --md-filled-button-container-shape: 10px;
  --md-filled-button-label-text-font: system-ui;
}
</style>