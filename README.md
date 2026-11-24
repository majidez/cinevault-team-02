# CineVault

A student Expo / React Native Paper film discovery app.

## Run locally

```sh
npm install
npx expo start
```

Scan the QR code with Expo Go. Run `npx expo start -c` to clear Metro's cached bundle.

## Student A handoff

Student A owns `App.tsx` and `theme.ts`. Student B replaces `components/MovieDiscovery.tsx` on `feature/movie-discovery` with the independently built movie cards, genre filters and watchlist. After that pull request is merged, Student A pulls `main`, creates `feature/home-screen`, and submits the home screen pull request for Student B to review.

The discovery component is currently an integration placeholder, not the completed Student B contribution.
