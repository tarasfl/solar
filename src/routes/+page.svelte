<script lang='ts'>
    import Cards from "../lib/Cards.svelte";
    import Chart from "../lib/Chart.svelte";
    import Paper, { Title, Subtitle, Content } from '@smui/paper';
    import LayoutGrid, { Cell } from '@smui/layout-grid';
</script>
<h3 class = 'page-title'>Analytics</h3>
<!-- <LayoutGrid>
    <Cell spanDevices = {{desktop: 12}}>
<Cards />
    </Cell>

</LayoutGrid> -->

<div class='cards'>

</div>

<Paper color="secondary" class='p'>
    <Title>Number of Leads</Title>
    <Subtitle>400+ Leads</Subtitle>
    <Content><Chart /></Content>
</Paper>

<style>
    
</style>


