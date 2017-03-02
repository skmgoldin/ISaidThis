This is a proof-of-existance contract you can use to prove something existed at least as recently as the block it was recorded in. I called it "ISaidThis" because I wanted to be able to prove in the future that I had conveyed a message to somebody at an earlier date without revealing what that message was.

Don't use `addProofByRaw` if you want the message to actually remain secret. `sha256` the message offline and use `addProofBySha`, then verify it was recorded properly using a `call` on `verifyRaw`.
