let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
type  props = {
  name: string
}
const Icons = (Props: props) => {
  return (
    <svg>
      <use xlinkHref={'#' + Props.name}/>
    </svg>
  );
};
export {Icons};