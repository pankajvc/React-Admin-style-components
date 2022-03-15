import React from 'react'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import IconNormalButton from '../../components/IconNormalButton';
import { MdDoubleArrow, MdLocalGasStation } from 'react-icons/md';
import ListItem from '../../components/ListItem';
import Items from '../../components/Items';
import { HeaderBrandLogo, ItemsInnerBox, ItemsInnerBoxIcon, ItemsText, SidebarContent, SidebarHeader, SidebarHeaderInner, SidebarIconBar, SidebarInnerContent, SidebarMain, SidebarMainInner, SidebarWrapper } from './style';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarContent>
        <SidebarMain>
          <SidebarMainInner>
            <SimpleBarReact style={{ maxHeight: 300 }}>
              <SidebarInnerContent>
                <SidebarHeader>
                  <SidebarHeaderInner>
                    <HeaderBrandLogo>
                      <img src="https://cdn.auth0.com/styleguide/components/1.0.0/media-object/logo.svg" alt="logo" />
                    </HeaderBrandLogo>
                    <SidebarIconBar>
                      <IconNormalButton sidebarIcon={true}>
                        <MdDoubleArrow />
                      </IconNormalButton>
                    </SidebarIconBar>
                  </SidebarHeaderInner>
                </SidebarHeader>
                <div>
                  <ListItem>
                    <Items>
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
                      <ItemsInnerBoxIcon>
                        <MdLocalGasStation />
                      </ItemsInnerBoxIcon>
                      <ItemsText>
                        App
                      </ItemsText>
                    </ItemsInnerBox>
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
