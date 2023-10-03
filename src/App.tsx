import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { colors, quotes } from "./Constants";

function App() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const twitterUrl =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
    quote.quote +
    " " +
    quote.author;
  const tumblrUrl =
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
    quote.author +
    "&content=" +
    quote.quote;
  return (
    <Container>
      <QuoteBox>
        <QuoteText>
          <FontAwesomeIcon icon={faQuoteLeft} />
          &nbsp; {quote.quote}
        </QuoteText>
        <QuoteAuthor> - {quote.author}</QuoteAuthor>
        <Buttons>
          <SnsButtons>
            <SnsButton href={twitterUrl} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </SnsButton>
            <SnsButton href={tumblrUrl} target="_blank">
              <FontAwesomeIcon icon={faTumblr} />
            </SnsButton>
          </SnsButtons>
          <NewButton onClick={() => window.location.reload()}>
            New Quote
          </NewButton>
        </Buttons>
      </QuoteBox>
      <Footer href="https://www.yahoo.co.jp">by Ryosuke</Footer>
    </Container>
  );
}

const color = colors[Math.floor(Math.random() * colors.length)];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${color};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuoteBox = styled.div`
  width: 450px;
  background-color: #fff;
  border-radius: 3px;
  padding: 40px 50px;
`;

const QuoteText = styled.div`
  width: 450px;
  text-align: center;
  font-size: 1.75rem;
  color: ${color};
`;

const QuoteAuthor = styled.div`
  width: 450px;
  padding-top: 20px;
  text-align: right;
  color: ${color};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const SnsButtons = styled.div`
  text-align: center;
`;

const SnsButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  background-color: ${color};
  color: white;
  width: 40px;
  margin-right: 5px;
  padding: 8px 0;
  font-size: 1.2rem;
  &:hover {
    opacity: 0.8;
  }
`;

const NewButton = styled.button`
  text-align: center;
  background-color: ${color};
  color: white;
  font-size: 0.8rem;
  border-radius: 3px;
  border: none;
  line-height: 22px;
  padding: 8px 18px 8px 18px;
  &:hover {
    opacity: 0.8;
  }
`;

const Footer = styled.a`
  display: block;
  width: 450px;
  padding: 15px 0;
  text-align: center;
  font-size: 70%;
  color: white;
  text-decoration: none;
`;

export default App;
