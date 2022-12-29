/* eslint-disable react/display-name */

type Hook<PROPS, USEPROPS> = (props: PROPS) => USEPROPS

export function Factory<PROPS, USEPROPS>(
  hook: Hook<PROPS, USEPROPS>,
  Component: React.ComponentType<PROPS & USEPROPS>
): React.FC<PROPS> {
  return (props) => <Component {...props} {...hook(props)} />
}
