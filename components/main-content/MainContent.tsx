import styled from "styled-components";
import RoundedContainer from "../styles/RoundedContainer";
import { FlexCnt, FlexCntAlgnCntr } from "../styles/FlexStyles";
import RecommendedSection from "../recommended-section/RecommendedSection";
import BestChefSection from "../best-chef-section/BestChefSection";
import { ChevronIconLeft, ChevronIconRight } from "../icons/ChevronIcons";
import { useAppSelector } from "../../store/hooks";
import Post from "../post/Post";
import { selectPosts } from "../../store/features/postSlice";

const StyledMainContent = styled(FlexCnt)`
  align-items: start;
`;

const StyledCentralSection = styled.section`
  width: 45%;
`;

const StyledSideSection = styled.section`
  width: 30%;
`;

const StyledSectionHeader = styled(FlexCntAlgnCntr)`
  margin-bottom: 20px;
`;

const MainContent: React.FC = () => {
  const posts = useAppSelector(selectPosts);

  return (
    <StyledMainContent>
      <StyledSideSection>
        <RoundedContainer>
          <StyledSectionHeader>
            <h3 style={{ margin: "0 10px", flex: 1 }}>
              Qualcuno ha detto cheesecake?
            </h3>
            <FlexCnt>
              <ChevronIconLeft />
              <ChevronIconRight />
            </FlexCnt>
          </StyledSectionHeader>
          <RecommendedSection />
        </RoundedContainer>
      </StyledSideSection>
      <StyledCentralSection>
        {posts.map((post) => {
          return (
            <RoundedContainer key={post.id} marginBottom="20px">
              <Post post={post} />
            </RoundedContainer>
          );
        })}
      </StyledCentralSection>
      <StyledSideSection>
        <RoundedContainer>
          <StyledSectionHeader>
            <h3 style={{ margin: "0" }}>Chef in tendenza</h3>
          </StyledSectionHeader>
          <BestChefSection />
        </RoundedContainer>
      </StyledSideSection>
    </StyledMainContent>
  );
};

export default MainContent;
