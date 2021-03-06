import React from 'react';
import styled from 'styled-components';
import githubIcon from 'assets/icons/github.svg';
import emailIcon from 'assets/icons/email.svg';
import linkedinIcon from 'assets/icons/linkedin.svg';
import facebookIcon from 'assets/icons/facebook.svg';

interface IconProps {
  icon: string;
}

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

const LinkItem = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  margin: 20px 0;
`;

const LinkName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.semiBold};
  padding: 8px 0;
`;

const LinkDescription = styled.p`
  font-weight: ${({ theme }) => theme.light};
  max-width: 480px;
  line-height: 20px;
  ${({ theme }) => theme.mq.s} {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 22px;
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Icon = styled.a<IconProps>`
  display: block;
  width: 50px;
  height: 50px;
  background: url(${({ icon }) => icon}) no-repeat center;
  background-size: 100%;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 0 0 15px -10px ${({ theme }) => theme.white};
  &:hover {
    box-shadow: 0 0 30px -10px ${({ theme }) => theme.white};
  }
`;

const ContactLinks = () => (
  <LinksWrapper>
    <LinkItem>
      <IconWrapper>
        <Icon href="mailto:mateuszp351@gmail.com" icon={emailIcon} />
      </IconWrapper>
      <InnerWrapper>
        <LinkName>Email</LinkName>
        <LinkDescription>
          Contact me by email - <b>mateuszp351@gmail.com</b>
        </LinkDescription>
      </InnerWrapper>
    </LinkItem>
    <LinkItem>
      <IconWrapper>
        <Icon
          href="https://github.com/mateusz-pocztowski"
          target="_blank"
          rel="noopener noreferrer"
          icon={githubIcon}
        />
      </IconWrapper>
      <InnerWrapper>
        <LinkName>GitHub</LinkName>
        <LinkDescription>
          Would you like to see my code? Take a look at my GitHub repositories!
        </LinkDescription>
      </InnerWrapper>
    </LinkItem>
    <LinkItem>
      <IconWrapper>
        <Icon
          href="https://www.linkedin.com/in/mateusz-pocztowski-63a0991b2/"
          target="_blank"
          rel="noopener noreferrer"
          icon={linkedinIcon}
        />
      </IconWrapper>
      <InnerWrapper>
        <LinkName>LinkedIn</LinkName>
        <LinkDescription>Let's connect on LinkedIn!</LinkDescription>
      </InnerWrapper>
    </LinkItem>
    <LinkItem>
      <IconWrapper>
        <Icon
          href="https://www.facebook.com/mateusz.pocztowski.3/"
          target="_blank"
          rel="noopener noreferrer"
          icon={facebookIcon}
        />
      </IconWrapper>
      <InnerWrapper>
        <LinkName>Facebook</LinkName>
        <LinkDescription>
          Have a question or any feedback suggestions? Message me on Facebook!
        </LinkDescription>
      </InnerWrapper>
    </LinkItem>
  </LinksWrapper>
);

export default ContactLinks;
