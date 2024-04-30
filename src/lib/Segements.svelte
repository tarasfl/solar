<SegmentedButton
  segments="{choices}"
  let:segment
  singleSelect
  bind:selected
  style="width:100%"
>
  <Segment
    {segment}
    style="width:50%; {segment === selected
      ? 'background-color: #007bff; color: #fff;'
      : ''}"
  >
    <Label>{segment}</Label>
  </Segment>
</SegmentedButton>

<script lang="ts">
  import SegmentedButton, { Segment } from '@smui/segmented-button'
  import { Label } from '@smui/common'

  let choices = ['Individual', 'Range']
  export let selected = 'Individual'
</script>
