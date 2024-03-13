<script lang="ts">
    import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
    import { Icon } from '@smui/common';
</script>


<Accordion style='margin-top:5px;'>
    <Panel  variant="unelevated">
    <Header style = 'align-items: center; display:flex'>
        <Icon class='material-icons' style = 'color:rgba(50, 110, 198, 0.8)'>store</Icon>
        Panel Data:
        <span slot="description">Yearly energy</span>
    </Header>
    <Content>
      Content
  </Content>
  </Panel>
  </Accordion>

  <style>
</style>