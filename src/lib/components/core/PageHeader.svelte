<script lang="ts">
  import { Button, El, Icon } from "yesvelte";

  export let title: string | undefined = undefined;
  export let back: boolean = false;
</script>

<El d="flex" mt="3" class="page-header" gap="3" {...$$restProps}>
  <El tag="h2" mb="0" style="font-size: 2rem; white-space: nowrap">
    <slot name="title">
        {title}
    </slot>
</El>

  <El d="flex" ms="auto" gap="2">
    {#if back}
      <Button on:click={() => history.back()}>
        <Icon name="chevron-left" />
        Back
      </Button>
    {/if}
    <slot />
  </El>
</El>

<style>
  :global(.page-header) {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
  }
</style>
