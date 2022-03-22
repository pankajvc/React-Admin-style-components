import React from 'react'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { MdLocalGasStation, MdChevronRight, MdDoubleArrow } from 'react-icons/md';
import ListItem from '../../components/ListItem';
import Items from '../../components/Items';
import { HeaderBrandLogo, InnerIconDot, InnerMenuIcon, InnerMenuItems, InnerMenuItemsList, InnerMenuText, ItemsInnerBox, ItemsInnerBoxIcon, ItemsText, OpenSubMenu, SidebarContent, SidebarHeader, SidebarHeaderInner, SidebarIconBar, SidebarInnerContent, SidebarMain, SidebarMainInner, SidebarWrapper } from './style';
import IconNormalButton from '../../components/IconNormalButton';

export default function Sidebar({ openMenu, setOpenMenu}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <SidebarWrapper isSidebar={openMenu}>
      <SidebarContent>
        <SidebarMain isSidebar={openMenu}>
          <SidebarMainInner>
            <SimpleBarReact style={{ maxHeight: "100%",height:"100%" }}>
              <SidebarInnerContent>
                <SidebarHeader>
                  <SidebarHeaderInner>
                    <HeaderBrandLogo>
                      <img src="https://cdn.auth0.com/styleguide/components/1.0.0/media-object/logo.svg" alt="logo" />
                    </HeaderBrandLogo>
                    <SidebarIconBar onClick={() => setOpenMenu(false)} className="mobileIcon">
                      <IconNormalButton sidebarIcon={true}>
                        <MdDoubleArrow />
                      </IconNormalButton>
                    </SidebarIconBar>
                  </SidebarHeaderInner>
                </SidebarHeader>
                <div>
                  <ListItem>
                    <Items isSidebar={openMenu}>
                      general
                    </Items>
                    <ItemsInnerBox>
                      <ItemsInnerBoxIcon>
                        <MdLocalGasStation />
                      </ItemsInnerBoxIcon>
                      <ItemsText>
                        App
                      </ItemsText>
                    </ItemsInnerBox>
                    <ItemsInnerBox>
                      <ItemsInnerBoxIcon openMenu={isOpen}>
                        <MdLocalGasStation />
                      </ItemsInnerBoxIcon>
                      <ItemsText>
                        App
                      </ItemsText>
                    </ItemsInnerBox>
                    <ItemsInnerBox onClick={handleOpenMenu} openMenu={isOpen}>
                      <ItemsInnerBoxIcon>
                        <MdLocalGasStation />
                      </ItemsInnerBoxIcon>
                      <ItemsText>
                        App
                      </ItemsText>
                      <MdChevronRight />
                    </ItemsInnerBox>
                    {isOpen &&
                      <OpenSubMenu openMenu={isOpen}>
                        <InnerMenuItemsList>
                          <InnerMenuItems>
                            <ItemsInnerBox openMenu={isOpen}>
                              <InnerMenuIcon>
                                <InnerIconDot/>
                              </InnerMenuIcon>
                              <InnerMenuText>
                                profile
                              </InnerMenuText>
                            </ItemsInnerBox>
                            <ItemsInnerBox openMenu={isOpen}>
                              <InnerMenuIcon>
                                <InnerIconDot/>
                              </InnerMenuIcon>
                              <InnerMenuText>
                                profile
                              </InnerMenuText>
                            </ItemsInnerBox>
                          </InnerMenuItems>
                        </InnerMenuItemsList>
                      </OpenSubMenu>
                    }
                  </ListItem>
                </div>
              </SidebarInnerContent>
            </SimpleBarReact>
          </SidebarMainInner>
        </SidebarMain>
      </SidebarContent>
    </SidebarWrapper>
  )
}
