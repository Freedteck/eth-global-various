import "../styles/faq.css";

const Faq = () => {
  return (
    <div className="container faq">
      <h3>FAQs</h3>
      <div className="questions">
        <div className="faq-item">
          <p>01</p>
          <details>
            <summary>
              <h4>What is Eth-Various?</h4>
            </summary>
            <p>
              Eth-Various is a collection of 10,000 unique NFTs on the Ethereum
              blockchain. Each NFT is unique and programmatically generated.
            </p>
          </details>
        </div>

        <div className="faq-item">
          <p>02</p>
          <details>
            <summary>
              <h4>Does it support all languages?</h4>
            </summary>
            <p>
              Yes, Eth-Various supports all languages. The text on the NFTs is
              generated using the text provided by the user, so it can be in any
              language.
            </p>
          </details>
        </div>

        <div className="faq-item">
          <p>03</p>
          <details>
            <summary>
              <h4>What makes Eth-Various unique?</h4>
            </summary>
            <p>
              Eth-Various NFTs are unique because they are programmatically
              generated, ensuring no two NFTs are alike.
            </p>
          </details>
        </div>

        <div className="faq-item">
          <p>04</p>
          <details>
            <summary>
              <h4>Do i need to know code to use Eth-Various? </h4>
            </summary>
            <p>
              No, you don&lsquo;t need to know code to use Eth-Various. You can
              simply mint an NFT by providing the text you want on the
            </p>
          </details>
        </div>
        <div className="faq-item">
          <p>05</p>
          <details>
            <summary>
              <h4>
                Can multiple team member in any organization manage contract?
              </h4>
            </summary>
            <p>
              Yes, multiple team members can manage the contract. You can add
              multiple team members to the contract and assign them different
              roles.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Faq;
