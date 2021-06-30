export const speak = (text: string) =>
{
    const message = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(message);
}