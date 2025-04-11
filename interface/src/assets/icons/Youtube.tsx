
import  SVGInterface  from "../../interface/SVG-inteface";



function Youtube(props: SVGInterface) {
  const { 
    color = "#DDE6FF", 
    hoverColor, 
    width = 39, 
    height = 39, 
    action, 
    ...rest 
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={action}
      style={{ 
        cursor: action ? "pointer" : "default",
        transition: "fill 0.3s ease",
      }}
      onMouseEnter={e => hoverColor && e.currentTarget.querySelector('path:nth-child(2)')?.setAttribute('fill', hoverColor)}
      onMouseLeave={e => e.currentTarget.querySelector('path:nth-child(2)')?.setAttribute('fill', color)}
      {...rest}
    >
      <path
        d="M19.591.806h-.001C9.08.806.56 9.326.56 19.836c0 10.51 8.52 19.03 19.03 19.03h.001c10.51 0 19.03-8.52 19.03-19.03 0-10.51-8.52-19.03-19.03-19.03z"
       
      />
      <path
        d="M34.185 12.457a3.827 3.827 0 00-2.693-2.711c-2.375-.641-11.901-.641-11.901-.641s-9.525 0-11.901.64a3.826 3.826 0 00-2.693 2.712c-.636 2.39-.636 7.379-.636 7.379s0 4.988.636 7.38a3.826 3.826 0 002.693 2.71c2.376.64 11.901.64 11.901.64s9.525 0 11.901-.64a3.826 3.826 0 002.693-2.71c.636-2.391.636-7.38.636-7.38s0-4.988-.636-7.38z"
        fill={color}
      />
      <path d="M16.475 24.366v-9.06l7.962 4.53-7.962 4.53z" fill="#211E36" />
    </svg>
  );
}

export default Youtube;