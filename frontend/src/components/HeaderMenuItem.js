import { Icon, Link } from '@chakra-ui/react';

const HeaderMenuItem = ({ label, url, icon }) => {
	return (
		<Link
			href={url}
			fontSize='sm'
			letterSpacing='wide'
			textTransform='uppercase'
			mr='5'
			display='flex'
			alignItems='center'
			color='whiteAlpha.700'
			_hover={{ textDecor: 'none', color: 'white' }}>
			<Icon as={icon} mr='1' w='4' h='4' />
			{label}
		</Link>
	);
};

export default HeaderMenuItem;
