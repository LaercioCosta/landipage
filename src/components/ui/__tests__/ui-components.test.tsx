import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';

describe('UI Components', () => {
  describe('Button', () => {
    it('renders correctly', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('applies variant classes', () => {
      render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-white');
      expect(button).toHaveClass('border');
    });

    it('applies size classes', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('px-4');
      expect(button).toHaveClass('py-2');
    });

    it('shows loading state', () => {
      render(<Button isLoading>Loading</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByRole('button')).toContainHTML('svg');
    });

    it('forwards ref', () => {
      const ref = jest.fn();
      render(<Button ref={ref}>Ref test</Button>);
      expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
    });
  });

  describe('Card', () => {
    it('renders correctly', () => {
      render(<Card>Card content</Card>);
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('applies variant classes', () => {
      render(<Card variant="elevated">Elevated</Card>);
      expect(screen.getByText('Elevated').parentElement).toHaveClass('shadow-lg');
    });

    it('applies padding classes', () => {
      render(<Card padding="lg">Padded</Card>);
      expect(screen.getByText('Padded').parentElement).toHaveClass('p-8');
    });
  });

  describe('Input', () => {
    it('renders with label', () => {
      render(<Input label="Email" placeholder="seu@email.com" />);
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument();
    });

    it('shows error message', () => {
      render(<Input label="Email" error="Email inválido" />);
      expect(screen.getByRole('alert')).toHaveTextContent('Email inválido');
    });

    it('shows helper text', () => {
      render(<Input label="Email" helperText="Usaremos apenas para contato" />);
      expect(screen.getByText('Usaremos apenas para contato')).toBeInTheDocument();
    });
  });

  describe('Badge', () => {
    it('renders correctly', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('applies variant classes', () => {
      render(<Badge variant="accent">Accent</Badge>);
      expect(screen.getByText('Accent')).toHaveClass('bg-accent-100');
      expect(screen.getByText('Accent')).toHaveClass('text-accent-700');
    });
  });

  describe('Container', () => {
    it('renders correctly', () => {
      render(<Container>Container content</Container>);
      expect(screen.getByText('Container content')).toBeInTheDocument();
    });

    it('applies size classes', () => {
      render(<Container size="sm">Small container</Container>);
      expect(screen.getByText('Small container').parentElement).toHaveClass('max-w-3xl');
    });
  });
});