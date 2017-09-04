
export function simulateChange(component, value) {
	component.simulate('change', {
		target: {
			name: component.props().name,
			value,
		}
	})
}
