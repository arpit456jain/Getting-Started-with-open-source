#req: googletrans==3.1.0a0
#https://developers.google.com/admin-sdk/directory/v1/languages, https://cloud.google.com/translate/docs/languageslangugage codes
from googletrans import Translator

translator = Translator()
text = input("\nEnter Text: ")
lang = input("In which language you want to translate?\nLanguage Code: ")
translation = translator.translate(text, dest=lang)
translated = translation.text #get only text
pronunciation = translation.pronunciation #get pronounciation
print("Translated text: " + translated + "\nPronunciation: " + pronunciation) 
