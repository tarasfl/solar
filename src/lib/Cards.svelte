

<script lang='ts'>
      import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';
</script>

<Card>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <h2
          class="mdc-typography--headline6"
          style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
        >
          A card with 16x9 media.
        </h2>
      </MediaContent>
    </Media>
    <Content style="color: #888;">Here's some gray text down here.</Content>
  </Card>

  <Card>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <h2
          class="mdc-typography--headline6"
          style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
        >
          A card with 16x9 media.
        </h2>
      </MediaContent>
    </Media>
    <Content style="color: #888;">Here's some gray text down here.</Content>
  </Card>
  <Card>
    <Media class="card-media-16x9" aspectRatio="16x9">
      <MediaContent>
        <h2
          class="mdc-typography--headline6"
          style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;"
        >
          A card with 16x9 media.
        </h2>
      </MediaContent>
    </Media>
    <Content style="color: #888;">Here's some gray text down here.</Content>
  </Card>
  <style>

    .md-card {
      height: 64px;
        width: auto;
    }

    * :global(.card-media-16x9) {
    background-image: url(https://placehold.co/320x180?text=16x9);
  }
  </style>