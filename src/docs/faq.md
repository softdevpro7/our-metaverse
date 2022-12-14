## 怎么才可以获得 OurMetaverseDAO NFT？

当前项目开放铸造中，铸造成功即可获得，只要你有以太坊钱包并有足够的 ETH（铸造每个 NFT 需要 0.01 ETH 以及适量的 Gas 费），你就可以访问[铸造](/mint)页面铸造 NFT。没有以太坊钱包的科幻爱好者们，可以访问[文档](https://www.yuque.com/docs/share/c893e308-681a-48d2-ba65-bd00649550b4?#)获取教程指导。NFT 总量只有 3000 个，快来加入吧~

## 为什么要发起 OurMetaverseDAO？

项目的发起人是愚指导，他是一名程序员，业余也写写科幻小说。他发表过一些科幻小说，虽然没有因此获得什么收入，但是创作让他收获了很多快乐。他有一份普通的程序员工作，不依靠创作谋生。大部分创作者都类似，尤其是小说作者。有很多创作者他们也无法依靠写作谋生，一篇上万字的小说也只能收获一两千元的稿费。整个创作者经济并不好，版权的开发和创作者利益在现有的文化产业体系下运转得并不好。相关权益的流通和二次开发以及周边的开发难以推动，创作者无法获取好的收益，好的作品难以被发掘，消费者也没有享受到更好的作品，普通投资者想要参与投资也很困难。但是 Web3 让我们看到了无穷无尽的可能性，所以我们创造了这个项目。

## 项目的目标是什么？

通过征文大赛等活动不断完善 IP，推动最终成功发行图书出版权和影视改编权来让 OurMetaverseDAO 的成员获取收益，实现项目的梦想：创造一个宇宙并将它搬上大荧幕。当然，这只是明确的当前的目标，希望这个实验能推动 OurMetaverseDAO 和 OurMetaverse IP 不断发展，未来我们期望更多可能。

## OurMetaverseDAO 会怎么运作？

OurMetaverseDAO 的运作目前还在不断探索，这本身就是一个实验，期望在未来项目不断的发展中去调整 DAO 的运作方式。不过目前已经有了一些初步的想法，比如正在举行的征文大赛，OurMetaverseDAO 的成员拥有作品的投票权。另外未来可能会发起 IP 共创，也可能会和一些科幻机构推出科幻福利，组织科幻活动等。我们希望可以打造一个优秀的科幻社区，打造一个 IP 共创的 DAO。

## 什么时候开图？

我们已经成功开图，通过 1400 多个元素带给大家与众不同的元宇宙形象。PFP 的设计基于小说世界观，人物包含了很多小说内提到的元素以及一些科幻元素，大家快去[画廊](/nfts)中找找看吧~

## 拥有 OurMetaverseDAO NFT 可以获得什么权益？

拥有 NFT 就拥有如下权益：

1. 获得 OurMetaverseDAO 成员的身份，可以加入内部社区和更多科幻爱好者以及创作者交流。
1. 参与收益分成，每一份 NFT 对应一份收入分成的权益，伴随 IP 发展，理论上是会有持续不断的收益，收益通过智能合约保证。
1. 拥有 OurMetaverse NFT 对应的数字图片艺术品，该系列图片基于小说背景创作，已经设计完成并开图，你可以用作你的头像。
1. OurMetaverseDAO 成员拥有 OurMetaverseDAO 作品集中包含的所有作品的数字化形式的修改权和翻译权，可以进行二次创作。
1. 拥有 0 号和 1 号 NFT 版权的成员拥有影视改编权和图书出版权。

更多具体细节见 [ERC721M](/whitepaper) 中的相关定义。

## 如果我想要基于 IP 做二创应该怎么做？

我们通过 ERC721M 定义了 `grant` 和 `getGrantsWithToken` 接口，它提供了著作权授权的接口定义，其中 grant 可以添加授权，将被授权的内容写入到合约中，`getGrantsWithToken` 则是获取某个 NFT 的授权信息的接口。比如在 OurMetaverseDAO NFT 中现在已经有了实际的例子：OurMetaverseDAO NFT #913 Holder 是一名创业播客，他现在正在制作《我们的元宇宙·开端》小说的广播剧，通过这一条记录就代表了该广播剧已经获得 OurMetaverseDAO 上面作品集的商业授权，可以基于《我们的元宇宙·开端》这篇小说发布商业化的数字艺术作品。具体记录可以在 [https://www.our-metaverse.xyz/nfts/token?token=913](https://www.our-metaverse.xyz/nfts/token?token=913) 查看。

## 0 号和 1 号 NFT 包含哪些权益？

在项目发布时，我们定义了 0 号 NFT 拥有所有作品集的影视改编权，1 号 NFT 拥有图书出版权。按照项目最初的设想，影视改编权是指院线电影和电视连续剧的改编权，不包括网络大电影、动漫这部分权益。图书出版权是指作品集集结出版的权益，但是作品集中作者的作品的其它线下出版权益依然归作者所有，比如在杂志和自己小说作品集中出版的权益。所以参加征文的作者对应作品依然可以在杂志上以自己的署名投稿自己的作品，但是需要遵守项目规定的相关约定。当然，因为版权涉及的细节和边界众多，未来如遇特殊情况则可以由 OurMetaverseDAO 通过投票等方式进行修改和裁决。

## 如何提取 NFT 的收益？

我们的智能合约定义了 `receiveRewardBalanceWithToken` 接口，通过触发该合约即可提取收益。具体可以参考[合约代码](https://etherscan.io/address/0xEcd0D12E21805803f70de03B72B1C162dB0898d9#code)。比如如果影视改编权被购买每个 NFT 可以获取 0.2ETH 的收益，相当于 20 倍的回报，另外其它授权也会持续不断产生收益，影视改编权的兑现也会有收益，具体可以参考 [ERC721M](/whitepaper) 中的相关说明。

## IP 后续的发展有什么计划？

目前我们正在组织征文大赛，希望通过征文大赛完善 IP 内容。小科幻团队成员作为项目的战略合作伙伴和 NFT 持有者未来也将一起在科幻圈子持续运营本项目。现在我们有了一篇创世小说，但是小说内容只是一个开始，只是一个世界观的架构。它引出了一个有很大扩展空间的设定，后续的创作还有很大空间。当前征文已经有了投稿内容，有了更多的创作者一起参与，我们的路才刚刚开始！欢迎添加我们的官方微信（ourmnft）和其它[账号](/community)关注我们的更新。

