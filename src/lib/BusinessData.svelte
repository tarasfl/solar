<script lang="ts">
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import { Icon } from '@smui/common';
    export let builldingData;
    builldingData.s
</script>


<Accordion style='margin-top:5px;'>
    <Panel  variant="unelevated">
    <Header style = 'align-items: center; display:flex'>
        <Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>store</Icon>
        Business Data:
        <span slot="description"></span>
    </Header>
    <Content>
      Content
  </Content>
  </Panel>
  </Accordion>

  <style>
</style>