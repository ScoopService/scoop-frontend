import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import FilterBanner from '../banners/FilterBanner';
import GroupCard from '../components/GroupCard';
import {StackNavigationProp} from '@react-navigation/stack';

const Container = styled.View`
  flex: 1;
  //background-color: #5dae48;
  background-color: white;
`;

const SectionTitle = styled.Text`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const PopularGroupsCard = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

type RootStackParamList = {
  GroupSearch: undefined; // undefined because you aren't passing any params to the home screen
  Notifications: undefined;
  Search: undefined;
};

type GroupSearchNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GroupSearch'
>;

type Props = {
  navigation: GroupSearchNavigationProp;
};

export const GroupSearch = ({navigation}: Props) => {
  useEffect(() => {
    //console.log('GroupSearch.tsx effect');
  }, []);

  return (
    <Container>
      <FilterBanner navigation={navigation} />
      {/*<SectionTitle>인기 모임</SectionTitle>*/}
      <ScrollView>
        <PopularGroupsCard>
          {/*TODO : groupArr.map((group, index) => (*/}
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </PopularGroupsCard>
      </ScrollView>
    </Container>
  );
};
