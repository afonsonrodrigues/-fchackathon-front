import { NavLink } from 'react-router-dom';
import OrangeBrand from '../../assets/orange-brand.svg';
import LinkAnimationContainer from '../LinkAnimationContainer';
import '../../styles/utils.css';
import { BrandContainer, CustomFooter, LinksWrapper, RightContainer, RightContainerTitle } from './styled';

export default function Footer() {
    return (
        <CustomFooter className='flex flex-col pb-8 lg:pb-0 items-center w-full sm:items-start sm:px-10 sm:h-[309px] lg:h-[250px] lg:items-center lg:justify-center'>
            <div className='lg:flex lg:justify-between lg:w-[1024px]'>
                <BrandContainer className='pt-14 mb-8 lg:pt-0 lg:flex lg:flex-col lg:justify-between'>
                    <img src={OrangeBrand} alt="Orange Evolution brand" />
                </BrandContainer>
                <RightContainer className='flex flex-col'>
                    <RightContainerTitle className='mb-12 pt-2'>
                        Conheça o ecossistema tech Orange Juice
                    </RightContainerTitle>
                    <LinksWrapper className='flex flex-col px-4 sm:h-24 flex-wrap gap-x-8'>
                        <LinkAnimationContainer>
                            <NavLink
                                name='1'
                            >
                                Orange Juice
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='2'>
                                Orange Hub
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='3'>
                                Orange Blog
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='5'>
                                Orange Talks
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='6'>
                                Orange Cast
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='7'>
                                Programa de formação
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='8'>
                                FAQ
                            </NavLink>
                        </LinkAnimationContainer>
                        <LinkAnimationContainer>
                            <NavLink
                                name='9'>
                                Contato
                            </NavLink>
                        </LinkAnimationContainer>
                    </LinksWrapper>
                </RightContainer>
            </div>
        </CustomFooter >
    )
}