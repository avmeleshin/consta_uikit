import * as React from 'react';

function TextImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 120" fill="none" {...props}>
      <path d="M0 4a4 4 0 014-4h192a4 4 0 014 4v112a4 4 0 01-4 4H4a4 4 0 01-4-4V4z" fill="#fff" />
      <path
        d="M58.014 72h-2.725l-2.227-5.889h-8.906L42.062 72h-2.74l8.057-21.006h2.549L58.014 72zm-5.757-8.1l-3.296-8.95c-.108-.294-.215-.763-.322-1.407h-.059c-.098.596-.21 1.064-.337 1.406l-3.266 8.95h7.28zm23.01 8.1h-2.403v-2.344h-.058c-1.045 1.797-2.583 2.696-4.615 2.696-1.494 0-2.666-.396-3.515-1.187-.84-.791-1.26-1.84-1.26-3.15 0-2.802 1.65-4.433 4.951-4.892l4.497-.63c0-2.549-1.03-3.823-3.09-3.823-1.807 0-3.438.615-4.893 1.846v-2.461c1.475-.938 3.174-1.407 5.097-1.407 3.526 0 5.289 1.866 5.289 5.596V72zm-2.403-7.588l-3.618.498c-1.113.156-1.953.435-2.52.835-.566.39-.849 1.089-.849 2.095 0 .732.259 1.333.776 1.802.528.459 1.226.688 2.095.688 1.191 0 2.173-.415 2.944-1.245.782-.84 1.172-1.9 1.172-3.179v-1.494zM108.211 74h-2.18l-1.781-4.71h-7.125L95.449 74h-2.191l6.445-16.805h2.039L108.211 74zm-4.606-6.48l-2.636-7.16c-.086-.235-.172-.61-.258-1.126h-.047c-.078.477-.168.852-.269 1.125l-2.614 7.16h5.824zM122.013 74h-1.922v-1.875h-.046c-.836 1.438-2.067 2.156-3.692 2.156-1.195 0-2.133-.316-2.812-.949-.672-.633-1.008-1.473-1.008-2.52 0-2.242 1.32-3.546 3.961-3.914l3.597-.504c0-2.038-.824-3.058-2.472-3.058-1.446 0-2.75.492-3.914 1.477v-1.97c1.179-.75 2.539-1.124 4.078-1.124 2.82 0 4.23 1.492 4.23 4.476V74zm-1.922-6.07l-2.894.398c-.891.125-1.563.348-2.016.668-.453.313-.679.871-.679 1.676 0 .586.207 1.066.621 1.441.422.368.98.551 1.675.551.954 0 1.739-.332 2.356-.996.625-.672.937-1.52.937-2.543V67.93zM152.408 75h-1.635l-1.335-3.533h-5.344L142.837 75h-1.644l4.834-12.603h1.53L152.408 75zm-3.454-4.86l-1.977-5.37c-.065-.176-.129-.457-.194-.844h-.035a4.758 4.758 0 01-.202.843l-1.96 5.37h4.368zM162.76 75h-1.441v-1.406h-.036c-.627 1.078-1.549 1.617-2.768 1.617-.897 0-1.6-.237-2.11-.712-.503-.475-.755-1.105-.755-1.89 0-1.681.99-2.66 2.97-2.935l2.699-.378c0-1.53-.619-2.294-1.855-2.294-1.084 0-2.062.37-2.935 1.107v-1.476c.884-.563 1.904-.844 3.058-.844 2.115 0 3.173 1.12 3.173 3.358V75zm-1.441-4.553l-2.171.3c-.668.093-1.172.26-1.512.5-.34.234-.51.653-.51 1.257 0 .44.155.8.466 1.081.316.275.735.413 1.257.413.715 0 1.304-.249 1.766-.747.469-.504.704-1.14.704-1.907v-.897z"
        fill="#0078D2"
      />
    </svg>
  );
}

export default TextImage;
