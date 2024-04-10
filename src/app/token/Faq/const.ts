export interface IItem {
    step: string
    label: string
    texts: string[]
}

export const items = [
    {
        step: "01",
        label: "$RECORD Token utility",
        texts: [
            "The $RECORD token model has two features: locking for engagement and governance. These features ensure widespread token distribution and foster active participation, fulfilling the Association's role as a trustworthy orchestrator in the complex music ecosystem.",
            "Token staking: $RECORD token locking by stakeholders signifies dedication to the ecosystem. This locking allows stakeholders to seamlessly distribute tokens to artists and musicians, facilitating their smooth onboarding. Additionally, token locking empowers artists with governance abilities and ensures their participation in the W3M ecosystem.",
            "Governance: $RECORD's token-locking mechanism provides stakeholders with voting power in return for locking tokens, allowing participation in governance decisions. It lays the groundwork for complete decentralization and serves as a foundation for Blockchain Governance.",
        ],
    },
    {
        step: "02",
        label: "$RECORD Token FINMA classification",
        texts: [
            "Enquiry: Web3 Music Association requested the Swiss Financial Market Supervisory Authority (FINMA) on 20 February 2023, 3 July 2023 and 29 September 2023 to assess the Web3 Music Protocol (Protocol) and the related $RECORD token under Swiss financial market laws.",
            "Classification: Based on the governance and staking token features FINMA qualified the $RECORD Token as a utility token and not as a security or payment token. As a consequence, the issuance of $RECORD Token by the Association is not subject to the Anti- Money Laundering Act and does not require a prospectus under the Financial Services Act.",
            "Further considerations: FINMA further confirmed that the issuance of $RECORD Token is not subject to the Banking Act since the $RECORD Token does not confer on the acquirer a repayment claim against the Association as the issuer of the $RECORD Tokens. Since the funds received from the token issuance are not to be managed by third parties, the applicability of the Collective Investment Schemes Act is also excluded. FINMA confirmed that no other financial market laws in Switzerland, including the Financial Market Infrastructure Act are applicable to the $RECORD Token.",
            ],
    },
    {
        step: "03",
        label: "$RECORD Token upgrade and compliance commitment",
        texts: [
            "Transition to Gas Token: As we progress in our blockchain development journey, the existing $RECORD token will undergo an essential transformation to become the token of a Sovereign Layer 1 blockchain network. This progression signifies not just a technical upgrade, but the integration of a robust incentive system tailored for blockchain validators and collators.",
            "Added features: The $RECORD token will be the primary gas token of the Music Protocol Blockchain. It will drive all actions, from simple transactions to complex smart contract executions. Its role will be pivotal in covering operational costs, validating actions, and ensuring the network's smooth operation. Beyond its utility, the token will play an integral role in the network's incentive framework, offering rewards to validators and collators who fortify and optimise the network.",
            "Continue regulatory approval: In tandem with this evolution, Web3 Music Association will be engaging in a comprehensive regulatory approval process. The objective is to ensure that the renewed $RECORD token retains its status as a utility token. This will encompass rigorous legal and compliance evaluations, ensuring the alignment with existing regulatory benchmarks, offering protection and clarity to all our stakeholders.",
        ],
    },
]

export const title = {
    mobile: [
        "Token Utility and",
        "Regulatory",
        "Considerations"
    ],
    desktop: [
        "Token Utility and ",
        "Regulatory Considerations",
    ]
}