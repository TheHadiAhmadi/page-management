<script lang="ts">
  import { El } from "yesvelte";
  import Element from "$lib/ui/Element.svelte";
  import { components } from "$lib/ui";

  export let props: any = {};
  export let items: any = {};
</script>

<El container={props.size} {...$$restProps}>
  {#each props.slot as slot}
    <Element
      element={{ ...slot, slot: slot.props.slot }}
      {items}
      {components}
    />
  {/each}
</El>
