export default `# Gas
<blockquote>
在区块链的背景下，
Gas指的是衡量在区块链网络上执行交易或执行智能合约所需计算工作量的度量单位。

当用户在区块链上发起交易或执行智能合约时，
他们必须支付以Gas形式收取的费用。
Gas费用支付给处理和验证交易或智能合约执行的矿工或验证器。

交易或智能合约执行所需的Gas数量取决于操作的复杂性和所需的计算资源。
操作越复杂，所需的Gas费用就越高。

Gas费用通常用区块链网络的加密货币来表示。
例如，在以太区块链上，Gas费用以以太币（ETH）的单位支付。
Gas费用有助于激励矿工或验证器处理和验证交易和智能合约执行，
以及防止垃圾邮件和滥用区块链网络。
</blockquote>

# Gas Limit 和 Gas Price

<blockquote>
当发送以太交易时，指定的  Gas Price（通常以 Gwei 计价）和 Gas Limit。
我们设置的Gas Price决定了愿意为每单位gas支付多少费用。
Gas Limit决定了愿意支付多少单位的gas。
也就是说忽略其他费用影响
实际需要费用 a = Gas * Gas Price
实际支付费用 b = Gas Limit * Gas Price (确保钱包有这么多钱
如果 b > a 剩余的钱会退回
如果 b < a 交易失败，且会损失掉b的处理费 (因为处理交易消耗资源

注:
1eth = 10^9 Gwei = 1^18 wei
</blockquote>`