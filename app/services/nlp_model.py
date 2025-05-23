from sentence_transformers import SentenceTransformer, InputExample, losses
from torch.utils.data import DataLoader

class NLPModel:
    def __init__(self, model_name="paraphrase-MiniLM-L6-v2"):
        self.model = SentenceTransformer(model_name)

    def encode(self, text):
        return self.model.encode(text, convert_to_tensor=True)

    def fine_tune(self, train_data):
        examples = [InputExample(texts=[text], label=1.0) for text in train_data]
        train_dataloader = DataLoader(examples, shuffle=True, batch_size=16)
        train_loss = losses.CosineSimilarityLoss(self.model)
        self.model.fit(train_objectives=[(train_dataloader, train_loss)], epochs=1)