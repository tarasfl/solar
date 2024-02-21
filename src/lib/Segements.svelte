
<SegmentedButton segments={choices} let:segment singleSelect bind:selected>
    <Segment {segment}>
      <Label>{segment}</Label>
    </Segment>
  </SegmentedButton>
  
  
  <script lang="ts">
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import { Label } from '@smui/common';
  
    let choices = ['Manual', 'Range'];
    let selected = 'Manual';
  </script>
