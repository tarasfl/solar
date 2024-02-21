
<SegmentedButton segments={choices} let:segment singleSelect bind:selected>
    <Segment {segment}>
      <Label>{segment}</Label>
    </Segment>
  </SegmentedButton>
  
  <!-- <pre class="status">Selected: {selected}</pre> -->
  
  <script lang="ts">
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import { Label } from '@smui/common';
  
    let choices = ['Manual', 'Range'];
    let selected = 'Manual';
  </script>
