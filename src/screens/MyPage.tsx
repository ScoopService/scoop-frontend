import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {styles} from '../theme/AppTheme';
import styled from 'styled-components/native';
import ProfileBanner from '../components/ProfileBanner';
import DateBanner from '../components/DateBanner';
import GroupCard from '../components/GroupCard';

const Container = styled.View`
  flex: 1;
  //background-color: lightcyan;
  background-color: white;
`;

const SectionTitle = styled.Text`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 700;
`;

const MyGroupsCard = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const PopularGroupsCard = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const MyPage = () => {
  useEffect(() => {
    //console.log('GroupSearch.tsx effect');
  }, []);

  return (
    <ScrollView>
      <Container>
        <ProfileBanner nickname="블루비" />
        <DateBanner />
        <SectionTitle>다음 모임</SectionTitle>
        <MyGroupsCard>
          <GroupCard />
          {/*TODO : 유저 키 Props 전달하기 */}
        </MyGroupsCard>
        <View
          style={{
            marginTop: 50,
            borderBottomColor: '#EFEFEF',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <SectionTitle>인기 모임</SectionTitle>
        <PopularGroupsCard>
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </PopularGroupsCard>
      </Container>
    </ScrollView>
  );
};
