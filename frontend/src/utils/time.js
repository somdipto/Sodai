export const formatTime = (timestamp,t) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diff / 1000);
    const diffMinutes = Math.floor(diff / (1000 * 60));
    const diffHours = Math.floor(diff / (1000 * 60 * 60));
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (diffSeconds < 60) {
      return `${diffSeconds} ${t('sodai.message.secondsAgo')}`;
    }else if (diffMinutes < 60) {
      return `${diffMinutes} ${t('sodai.message.minutesAgo')}`;
    } else if (diffHours < 24) {
      return `${diffHours} ${t('sodai.message.hoursAgo')}`;
    } else if (diffDays < 30) {
      return `${diffDays} ${t('sodai.message.daysAgo')}`;
    } else if (diffDays < 365) {
      return `${Math.floor(diffDays / 30)} ${t('sodai.message.monthsAgo')}`;
    } else {
      return `${Math.floor(diffDays / 365)} ${t('sodai.message.yearsAgo')}`;
    }
  };

export default {
    formatTime
}