import { MD3DarkTheme, type MD3Theme } from 'react-native-paper';
export const colors = { background:'#090B12', surface:'#121620', raised:'#1A202C', text:'#F5F3EF', muted:'#A1A6B3', gold:'#E4B46A', outline:'#2C3341' };
export const cineVaultTheme: MD3Theme = { ...MD3DarkTheme, roundness:18, colors:{ ...MD3DarkTheme.colors, primary:colors.gold, onPrimary:'#17120B', secondary:'#F0D2A2', background:colors.background, surface:colors.surface, surfaceVariant:colors.raised, onSurface:colors.text, onSurfaceVariant:colors.muted, outline:colors.outline } };
