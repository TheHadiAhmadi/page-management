<script lang='ts'>

  import { El, Navbar } from "yesvelte";
  export let props: any = {}

</script>

<Navbar bgColor={props.color}>
  <El
      container={props.container_size}
      d="flex"
      alignItems="center"
      justifyContent="between"
    >
      
  <El d="flex" gap="3" alignItems="center">
    <img src="/files/{props.logo}" alt={props.title} width="50" />
    <h1 style="margin:0">{props.title}</h1>
  </El>
  <slot />
</El>

</Navbar>
