

<SegmentedButton segments={choices} let:segment singleSelect bind:selected>
    <Segment {segment}>
      <Label>{segment}</Label>
    </Segment>
  </SegmentedButton>
  
  <!-- <div style="margin-top: 1em;">Programmatically select:</div>
  <Button on:click={() => (selected = 'Morning')}>
    <Label>Morning</Label>
  </Button>
  <Button on:click={() => (selected = 'Afternoon')}>
    <Label>Afternoon</Label>
  </Button>
  <Button on:click={() => (selected = 'Evening')}>
    <Label>Evening</Label>
  </Button>
  <Button on:click={() => (selected = 'Night')}>
    <Label>Night</Label>
  </Button> -->
  
  <pre class="status">Selected: {selected}</pre>
  
  <script lang="ts">
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import Button from '@smui/button';
    import { Label } from '@smui/common';
  
    let choices = ['Manual', 'Range'];
    let selected = 'Manual';
  </script>
